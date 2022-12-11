import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Cnumber',
    Footer: 'Cnumber',
    accessor: 'Cnumber',
    // disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'first_name',
    sticky: 'left'
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
    sticky: 'left'
  },
  {
    Header: 'Address',
    Footer: 'Address',
    accessor: 'Address'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone'
  },
  {
    Header: 'Edate',
    Footer: 'Edate',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  // {
  //   Header: 'Email',
  //   Footer: 'Email',
  //   accessor: 'email'
  // },
  // {
  //   Header: 'Age',
  //   Footer: 'Age',
  //   accessor: 'age'
  // },
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Cnumber',
    Footer: 'Cnumber',
    accessor: 'Cnumber'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      // {
      //   Header: 'Edate',
      //   Footer: 'Edate',
      //   accessor: 'date_of_birth'
      // },
      {
        Header: 'Address',
        Footer: 'Address',
        accessor: 'Address'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]
