export const getMilliseconds = (timeObject) => {
    const milliseconds =
        timeObject.seconds * 1000 + Math.round(timeObject.nanoseconds / 1e6);
    return milliseconds;
};
