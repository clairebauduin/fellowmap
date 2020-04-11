# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_11_154448) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "improvements", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "emoji"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "theme_id", null: false
    t.index ["theme_id"], name: "index_improvements_on_theme_id"
  end

  create_table "kpis", force: :cascade do |t|
    t.string "emoji"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "theme_id", null: false
    t.index ["theme_id"], name: "index_kpis_on_theme_id"
  end

  create_table "roadmaps", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_roadmaps_on_user_id"
  end

  create_table "themes", force: :cascade do |t|
    t.bigint "roadmap_id", null: false
    t.string "temporality"
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["roadmap_id"], name: "index_themes_on_roadmap_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "superadmin_role", default: false
    t.boolean "supervisor_role", default: false
    t.boolean "user_role", default: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "improvements", "themes"
  add_foreign_key "kpis", "themes"
  add_foreign_key "roadmaps", "users"
  add_foreign_key "themes", "roadmaps"
end
