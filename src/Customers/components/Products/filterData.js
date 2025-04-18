export  const singleFilters = [
    {
      id: "price",
      name: "Price",
      options: [
        { value: "000-999", label:   "₹599  to ₹999" },
        { value: "999-1499", label:  "₹999  to ₹1499" },
        { value: "1499-1999", label: "₹1499 to ₹1999" },
        { value: "1999-2499", label: "₹1999 to ₹2499" },
        { value: "2499-2999", label: "₹2499 to ₹2999" },
        { value: "2999-3499", label: "₹2999 to ₹3499" },
        { value: "3499-3999", label: "₹3499 to ₹3999" },
        { value: "3999-4499", label: "₹3999 to ₹4499" },
        { value: "4499-4999", label: "₹4499 to ₹4999" },
        { value: "4999-9999", label: "₹4999 to ₹9999" },
        {value:"Reset",label:"Reset"}
      ]
    },
    {
      id: "discount",
      name: "Discount",
      options: [
        { value: 10, label: "10% and above" },
        { value: 20, label: "20% and above" },
        { value: 30, label: "30% and above" },
        { value: 40, label: "40% and above" },
        { value: 50, label: "50% and above" },
        { value: 60, label: "60% and above" },
        { value: 70, label: "70% and above" },
        { value: 80, label: "80% and above" },
       
  
      ]
    },
    {
      id: "stock",
      name: "Availability",
      options: [
        { value: "in_stock", label: "In Stock" },
        { value: "out_of_stock", label: "Out of Stock" }
      ]
    }
  ];
  
  const Multiplefilters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "red", label: "Red" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
        { value: "yellow", label: "Yellow" },
        { value: "gray", label: "Gray" },
        { value: "purple", label: "Purple" }
      ]
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" }
      ]
    }
  ];
  export {Multiplefilters}
  