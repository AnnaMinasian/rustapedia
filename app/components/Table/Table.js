import styled from 'styled-components';

const Table = styled.table`
  color: #1d1d1f;
  border-collapse: separate;
  border-spacing: 10px;
  width: 100%;
  background-color: rgba(191, 191, 191, 0.4);

  .tableCell {
    background: rgba(191, 191, 191, 0.8);
  }
  .container {
    display: flex;
    align-items: center;
    flex-wrap: no-wrap;
  }
  .small-font {
    font-size: 0.8rem;
  }
  .marginLeft {
    margin-left: 10px;
  }
  .center {
    text-align: center;
  }
`;

export default Table;
