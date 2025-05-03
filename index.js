exports.handler = async (event) => {
    // Log the event for debugging
    console.log("Event: ", event);

    // Create a response
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hey Bhav!",
        }),
    };

    return response;
};