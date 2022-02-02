import styled from 'styled-components';

export const TableStatistic = styled.table`
  width: 80%;
  border: none;
  border-collapse: collapse;
  margin: 100px auto;
`;
export const TableStatisticTitle = styled.caption`
  margin-bottom: 30px;
  font-size: 30px;
`;
export const TableStatisticHead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const TableStatisticHeadTr = styled.tr`
  background-color: rgba(0, 0, 0, 0.04);
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
  border-spacing: 0;
  border-collapse: collapse;
`;
export const TableStatisticHeadThStart = styled.th`
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  line-height: 1.5rem;
  padding: 6px 24px 6px 16px;
  display: table-cell;
  font-size: 0.875rem;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px 0 0 8px;
  letter-spacing: 0.01071em;
  vertical-align: inherit;
`;
export const TableStatisticHeadThEnd = styled.th`
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  line-height: 1.5rem;
  padding: 6px 24px 6px 16px;
  display: table-cell;
  font-size: 0.875rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  border-radius: 0 8px 8px 0;
  letter-spacing: 0.01071em;
  vertical-align: inherit;
`;
export const TableStatisticHeadTh = styled.th`
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  line-height: 1.5rem;
  padding: 6px 24px 6px 16px;
  display: table-cell;
  font-size: 0.875rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.01071em;
  vertical-align: inherit;
`;
export const TableStatisticBody = styled.tbody`
  display: table-row-group;
`;
export const TableStatisticBodyTr = styled.tr`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
  border-spacing: 0;
  border-collapse: collapse;
`;
export const TableStatisticBodyTrEnd = styled.tr`
  background-color: rgba(0, 0, 0, 0.04);
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
  border-spacing: 0;
  border-collapse: collapse;
`;
export const TableStatisticBodyTh = styled.th`
  padding: 6px 24px 6px 16px;
  color: rgba(0, 0, 0, 0.87);
  display: table-cell;
  font-size: 0.875rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  vertical-align: inherit;
  text-align: center;
`;
export const TableStatisticBodyThName = styled.th`
  border-radius: 8px 0 0 8px;
  padding: 6px 24px 6px 16px;
  color: rgba(0, 0, 0, 0.87);
  display: table-cell;
  font-size: 0.875rem;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  vertical-align: inherit;
`;
