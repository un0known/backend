class ApiError extends Error{
    constructor(
        statuscode,
        message = "somthing went wrong",
        error = [],
        stack = ""
    ){
        super(message); // Call the parent Error class to set the message

        this.statuscode = statuscode; // Store the HTTP status code
        this.data = null;            // Set default value for data property
        this.message = message;      // Store the error message
        this.success = false;        // Indicate the operation failed
        this.error = error;          // Store additional error details
        
        if (stack){
            this.stack = stack // Use provided stack trace if given
        }else{
            Error.captureStackTrace(this, this.constructor)
            // Automatically generate a stack trace, excluding the constructor
        }


    }
}