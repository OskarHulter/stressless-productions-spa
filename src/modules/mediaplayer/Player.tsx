import { useMemo } from "react"
import { useTable } from 'react-table'
import styled from 'styled-components'

const data = useMemo(
  () => [
    {
      col1: 'Hello',
      col2: 'World',
    },
    {
      col1: 'React-table',
      col2: 'rocks',
    },
    {
      col1: 'asdf',
      col2: 'fasd',
    },
  ],
  []
)

const columns = useMemo(
  () => [
    {
      Header: 'Column 1',
      accessor: 'col1', // accessor is the "key" in the data
    },
    {
      Header: 'Column 2',
      accessor: 'col2',
    },
  ],
  []
)

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = useTable({ columns, data })

const Table = styled.table`
  display: grid;
  grid-template-areas:
    "table-header"
    "table-content";
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.primary};
`
const TableHeader = styled.thead`
  grid-area: table-header;
  width: 100%;
  height: ${({ theme }) => theme.sizes.fieldHeight};
  color: ${({ theme }) => theme.colors.primary};
`
const TableBody = styled.tbody`
  grid-area: table-content;
  width: 100%;
  height: ${({ theme }) => theme.sizes.fieldHeight};
  color: ${({ theme }) => theme.colors.primary};
`
const TableRow = styled.tr`
  display: grid;
  grid-template-areas:
    "column1 column2 column3 column4 column5"
  width: 100%;
  height: ${({ theme }) => theme.sizes.fieldHeight};
  color: ${({ theme }) => theme.colors.primary};
`
const HeaderField = styled.th`
  min-width: ${({ theme }) => theme.sizes.fieldMinWidth};
  height: ${({ theme }) => theme.sizes.fieldHeight};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`
const Field = styled.td`
  min-width: ${({ theme }) => theme.sizes.fieldMinWidth};
  height: ${({ theme }) => theme.sizes.fieldHeight};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`

export default () =>
  <Table {...getTableProps()}>
    <TableHeader>
      {headerGroups.map(headerGroup => 
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column =>
            <HeaderField {...column.getHeaderProps()}>
              {column.render('Header')}
            </HeaderField>
          )}
        </TableRow>
      )}
    </TableHeader>
    <TableBody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row)
        return (
          <TableRow {...row.getRowProps()}>
            {row.cells.map(cell =>
              <Field {...cell.getCellProps()}>{cell.render('Cell')}
              
              </Field>
            )}
          </TableRow>
        )
      })}
    </TableBody>
  </Table>