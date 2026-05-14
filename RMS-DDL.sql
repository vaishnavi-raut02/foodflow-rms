-- =========================================
-- Restaurant Management System (RMS)
-- PostgreSQL DDL Script
-- =========================================


DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS menu_categories CASCADE;
DROP TABLE IF EXISTS users CASCADE;

DROP TYPE IF EXISTS user_role CASCADE;
DROP TYPE IF EXISTS order_status CASCADE;
DROP TYPE IF EXISTS payment_status CASCADE;
DROP TYPE IF EXISTS payment_method CASCADE;


CREATE TYPE user_role AS ENUM (
    'ADMIN',
    'STAFF'
);

CREATE TYPE order_status AS ENUM (
    'ACTIVE',
    'PREPARING',
    'SERVED',
    'COMPLETED',
    'CANCELLED'
);

CREATE TYPE payment_status AS ENUM (
    'PENDING',
    'PAID',
    'FAILED'
);

CREATE TYPE payment_method AS ENUM (
    'CASH',
    'CARD',
    'UPI'
);


CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,

    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,

    full_name VARCHAR(100) NOT NULL,

    role user_role NOT NULL,

    active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_categories (
    id BIGSERIAL PRIMARY KEY,

    name VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE menu_items (
    id BIGSERIAL PRIMARY KEY,

    category_id BIGINT NOT NULL,

    name VARCHAR(100) NOT NULL,

    description TEXT,

    price NUMERIC(10,2) NOT NULL
        CHECK (price >= 0),

    available BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_menu_category
        FOREIGN KEY (category_id)
        REFERENCES menu_categories(id)
        ON DELETE RESTRICT
);

-- =========================================
-- ORDERS TABLE
-- =========================================

CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,

    table_number INT NOT NULL
        CHECK (table_number > 0),

    created_by BIGINT NOT NULL,

    status order_status NOT NULL DEFAULT 'ACTIVE',

    total_amount NUMERIC(10,2) NOT NULL DEFAULT 0
        CHECK (total_amount >= 0),

    payment_status payment_status NOT NULL DEFAULT 'PENDING',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_order_user
        FOREIGN KEY (created_by)
        REFERENCES users(id)
        ON DELETE RESTRICT
);

-- =========================================
-- ORDER ITEMS TABLE
-- =========================================

CREATE TABLE order_items (
    id BIGSERIAL PRIMARY KEY,

    order_id BIGINT NOT NULL,

    menu_item_id BIGINT NOT NULL,

    quantity INT NOT NULL
        CHECK (quantity > 0),

    price_at_order NUMERIC(10,2) NOT NULL
        CHECK (price_at_order >= 0),

    subtotal NUMERIC(10,2) NOT NULL
        CHECK (subtotal >= 0),

    CONSTRAINT fk_order
        FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_menu_item
        FOREIGN KEY (menu_item_id)
        REFERENCES menu_items(id)
        ON DELETE RESTRICT
);

-- =========================================
-- PAYMENTS TABLE
-- =========================================

CREATE TABLE payments (
    id BIGSERIAL PRIMARY KEY,

    order_id BIGINT NOT NULL,

    amount NUMERIC(10,2) NOT NULL
        CHECK (amount >= 0),

    payment_method payment_method NOT NULL,

    payment_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    status payment_status NOT NULL DEFAULT 'PAID',

    CONSTRAINT fk_payment_order
        FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE
);

-- =========================================
-- INDEXES
-- =========================================

CREATE INDEX idx_orders_status
ON orders(status);

CREATE INDEX idx_orders_created_at
ON orders(created_at);

CREATE INDEX idx_menu_items_category
ON menu_items(category_id);

CREATE INDEX idx_order_items_order
ON order_items(order_id);

CREATE INDEX idx_payments_order
ON payments(order_id);

-- TRIGGER FUNCTION:
-- AUTO UPDATE updated_at


CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGER:
-- AUTO UPDATE orders.updated_at


CREATE TRIGGER trg_update_orders_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- SAMPLE DEFAULT DATA

-- Default Admin User
-- Password should later be replaced
-- with BCrypt hashed password

INSERT INTO users (
    username,
    password,
    full_name,
    role
)
VALUES (
    'admin',
    'admin123',
    'System Administrator',
    'ADMIN'
);

-- Sample Categories

INSERT INTO menu_categories (name)
VALUES
('Drinks'),
('Main Course'),
('Desserts');

-- VIEW:
-- DAILY SALES SUMMARY

CREATE VIEW daily_sales_summary AS
SELECT
    DATE(payment_time) AS sales_date,
    COUNT(*) AS total_transactions,
    SUM(amount) AS total_revenue
FROM payments
WHERE status = 'PAID'
GROUP BY DATE(payment_time);

-- =========================================
-- VIEW:
-- ACTIVE ORDERS
-- =========================================

CREATE VIEW active_orders AS
SELECT
    o.id,
    o.table_number,
    o.status,
    o.total_amount,
    o.created_at,
    u.full_name AS created_by_staff
FROM orders o
JOIN users u
ON o.created_by = u.id
WHERE o.status NOT IN ('COMPLETED', 'CANCELLED');