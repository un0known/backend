/*
The asyncHandler function automates this process. Instead of writing 
try/catch in every route, it wraps your code and handles errors for you.
*/
// WITHOUT TRY AND CATCH
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve( requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}


export {asyncHandler}


// WITH TRY ABD CATCH 

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }