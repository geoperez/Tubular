using System;

namespace Tubular.Web.Utils
{
    public class Order
    {
        public Order(int orderID, string customerName, DateTime shippedDate, string shipperCity, double amount, bool isShipped)
        {
            OrderID = orderID;
            CustomerName = customerName;
            ShippedDate = shippedDate;
            ShipperCity = shipperCity;
            Amount = amount;
            IsShipped = isShipped;
        }

        public int OrderID { get; set; }
        public string CustomerName { get; set; }
        public DateTime ShippedDate { get; set; }
        public string ShipperCity { get; set; }
        public double Amount { get; set; }
        public bool IsShipped { get; set; }
    }
}
