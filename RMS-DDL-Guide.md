# README.md  

## Overview  
This repository contains a **PostgreSQL DDL script** for a simple **Restaurant Management System (RMS)**.  
The script creates:

* Core tables: `users`, `menu_categories`, `menu_items`, `orders`, `order_items`, `payments`  
* Enums for roles, order/payment status, and payment methods  
* Indexes for common queries  
* Triggers to keep `orders.updated_at` in sync  
* Sample data (admin user, categories) and two handy views (`daily_sales_summary`, `active_orders`)

## Prerequisites  

| Requirement | Reason |
|-------------|--------|
| PostgreSQL 13+ (any recent version) | Uses standard SQL and PL/pgSQL |
| psql (or any client) | To execute the script |
| (Optional) BCrypt library | To replace the placeholder admin password with a hashed one |

## Getting Started  

1. **Clone the repository**  

   ```bash
   git clone https://github.com/your-username/rms-ddl.git
   cd rms-ddl
   ```

2. **Create a database (if you don’t have one already)**  

   ```bash
   createdb rms_db
   ```

3. **Run the script**  

   ```bash
   psql -d rms_db -f RMS-DDL.txt
   ```

   The script will:  

   * Drop existing RMS objects (if any)  
   * Re‑create all enums, tables, indexes, triggers, and views  
   * Insert a default admin user (`username: admin`, `password: admin123`) – **replace** this with a hashed password before production use  
   * Insert three sample menu categories  

## Usage Tips  

* **Connect as the admin** (`admin` / `admin123`) to add staff users, menu items, etc.  
* Use the `daily_sales_summary` view to get revenue per day and the `active_orders` view to monitor open orders.  
* The `updated_at` column on `orders` updates automatically on every row change, thanks to the trigger `trg_update_orders_updated_at`.