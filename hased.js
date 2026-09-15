ersonSchema.pre('save', async function(next) { 
    const person = this; 
 
    // Hash the password only if it has been modified (or is new) 
    if (!person.isModified('password')) return next(); 
 
    try { 
        // Generate a salt 
        const salt = await bcrypt.genSalt(10); 
 
        // Hash the password with the salt 
        const hashedPassword = await bcrypt.hash(person.password, salt); 
 
        // Override the plain password with the hashed one 
        person.password = hashedPassword; 
        next(); 
    } catch (error) { 
        return next(error); 
    } 
});
