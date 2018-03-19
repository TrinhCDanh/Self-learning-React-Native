var horizonStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy"
    },
    cloud: {
        ios: "ios-cloud",
        android: "md-cloud"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm"
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny"
    }
}

var horizontalFlatListData = [
    {
        hour: "1 AM",
        status: horizonStatus.rainy,
        degrees: 65
    },
    {
        hour: "2 AM",
        status: horizonStatus.sunny,
        degrees: 57
    },
    {
        hour: "3 AM",
        status: horizonStatus.thunderstorm,
        degrees: 53
    },
    {
        hour: "4 AM",
        status: horizonStatus.cloud,
        degrees: 77
    },
    {
        hour: "5 AM",
        status: horizonStatus.rainy,
        degrees: 12
    }
];

export {horizonStatus}
export {horizontalFlatListData}