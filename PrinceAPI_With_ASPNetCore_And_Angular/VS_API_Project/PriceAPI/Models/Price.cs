using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PriceAPI.Models
{
    public class Price
    {
        [Key]
        public int PId { get; set; }
        public double MonthlyPrice { get; set; }
        public int NumberOfUsers { get; set; }
        public int Data { get; set; }
        public string AdditionalSupport { get; set; }
    }
}
