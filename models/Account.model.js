const mongoose = require('mongoose');

// Get ObjectId from mongoose.Schema.Types
const { ObjectId } = mongoose.Schema.Types;

const accountSchema = new mongoose.Schema({
    account_owner: { type: ObjectId },  // Removed quotes and defined using mongoose type
    account_name: { type: String },     // Correctly defining types
    account_number: { type: String },
    account_site: { type: String },
    parent_account: { type: ObjectId },
    account_type: { type: String },
    industry: { type: String },
    annual_revenue: { type: Number },
    employees: { type: Number },
    created_by: { type: ObjectId },
    modified_by: { type: ObjectId },
    ticker_symbol: { type: String },
    ownership: { type: String },
    rating: { type: String },
    description: { type: String },
    address_information: {
        billing_street: { type: String },
        billing_city: { type: String },
        billing_state: { type: String },
        billing_code: { type: String },
        billing_country: { type: String },
        shipping_street: { type: String },
        shipping_city: { type: String },
        shipping_state: { type: String },
        shipping_code: { type: String },
        shipping_country: { type: String }
    },
    contacts: [
        {
            contact_name: { type: String },
            email: { type: String },
            phone: { type: String },
            mobile: { type: String },
            department: { type: String },
            title: { type: String }
        }
    ],
    deals: [
        {
            deal_name: { type: String },
            amount: { type: Number },
            stage: { type: String },
            probability: { type: Number },
            closing_date: { type: Date },
            type: { type: String }
        }
    ],
    activities: {
        open_activities: {
            tasks: [
                {
                    task_name: { type: String },
                    due_date: { type: Date },
                    status: { type: String },
                    priority: { type: String }
                }
            ],
            meetings: [
                {
                    meeting_name: { type: String },
                    meeting_date: { type: Date },
                    status: { type: String },
                    priority: { type: String }
                }
            ],
            calls: [
                {
                    call_name: { type: String },
                    call_date: { type: Date },
                    status: { type: String },
                    priority: { type: String }
                }
            ]
        },
        closed_activities: [
            {
                activity_name: { type: String },
                activity_date: { type: Date },
                status: { type: String },
                priority: { type: String }
            }
        ]
    },
    notes: [
        {
            note_text: { type: String },
            created_date: { type: Date }
        }
    ],
    attachments: [
        {
            attachment_name: { type: String },
            attachment_url: { type: String },
            uploaded_date: { type: Date }
        }
    ],
    emails: [
        {
            email_address: { type: String },
            email_settings: { type: String }
        }
    ],
    products: [
        {
            product_name: { type: String },
            product_code: { type: String },
            quantity: { type: Number }
        }
    ],
    quotes: [
        {
            quote_number: { type: String },
            quote_date: { type: Date },
            amount: { type: Number }
        }
    ],
    sales_orders: [
        {
            order_number: { type: String },
            order_date: { type: Date },
            amount: { type: Number }
        }
    ],
    invoices: [
        {
            invoice_number: { type: String },
            invoice_date: { type: Date },
            amount: { type: Number }
        }
    ],
    member_accounts: [
        {
            member_account_name: { type: String },
            member_account_id: { type: ObjectId }
        }
    ],
    cases: [
        {
            case_number: { type: String },
            case_date: { type: Date },
            status: { type: String },
            priority: { type: String }
        }
    ],
    social_links: [
        {
            platform: { type: String },
            link: { type: String }
        }
    ],
    projects: [
        {
            project_name: { type: String },
            project_id: { type: ObjectId }
        }
    ]
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
