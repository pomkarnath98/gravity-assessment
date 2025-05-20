db.sales.aggregate([
    { $unwind: "$items" },
    {
        $group: {
            _id: {
                store: "$store",
                month: { $dateToString: { format: "%Y-%m", date: "$date" } }
            },
            totalRevenue: {
                $sum: { $multiply: ["$items.quantity", "$items.price"] }
            },
            allPrices: { $push: "$items.price" }
        }
    },
    {
        $project: {
            store: "$_id.store",
            month: "$_id.month",
            totalRevenue: 1,
            averagePrice: { $avg: "$allPrices" },
            _id: 0
        }
    },
    { $sort: { store: 1, month: 1 } }
]);
