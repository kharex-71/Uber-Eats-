export const login = async ()  => {
        return(
            {
                id: 789,
                full_name: "George Kharaishvili",
                email_address: "johndoe@example.com",
                phone_number: "+1234567890",
                password: "MySecurePassword123!",
                delivery_address: "123 Main Street, City, Country",
                payment_method: "Credit Card",
                dietary_preferences: ["Vegetarian", "Gluten-free"],
                delivery_instructions: "I want to be able to dynamically calculate the coordinates of the customer here so that I can accurately deliver the product to the location.",
                profile_picture: require("../../assets/grocery/brocouli.png"),
                notification_preferences: { email: true, sms: false, push: true },
                terms_accepted: true
            }
            
            
        )
}