export default function getRolePermissionData() {
  return [
    {
      id: 1,
      role: "adminn",
      permission: [],
    },
    {
      id: 2,

      role: "super admin",
      permission: [
        {
          id: 1,
          name: "creste_product",
        },
        {
          id: 2,

          name: " update_product",
        },
        {
          id: 3,

          name: "view_product",
        },
        {
          id: 4,

          name: "delete_product?A",
        },
      ],
    },
    {
      id: 3,

      role: "Cashier",
      permission: [
        {
          id: 5,
          name: "creste_account",
        },
        {
          id: 6,

          name: " update_account",
        },
        {
          id: 7,

          name: "view_accoubt",
        },
        {
          id: 8,

          name: "delete_accoubt",
        },
      ],
    },
    {
      id: 4,

      role: "N?A",
      permission: [],
    },
  ];
}
