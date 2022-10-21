import React from 'react';
import styled from 'styled-components';
import Container from '../../../components/Container';

const Inner = styled(Container.Inner)`
  max-width: 1000px;
  padding: 75px 0;

  @media all and (max-width: 1199px) {
    padding: 75px 32px 55px;
  }
`;

const Text = styled.h2`
  margin: 0 0 10px;
  font-size: 1.25rem;
`;

const TableWrapper = styled.div`
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media all and (max-width: 991px) {
    overflow: auto;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;

  th,
  td {
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    padding: 30px;
    width: 25%;
    font-size: 1.25rem;
  }

  th {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: #fff;
  }

  tr:last-child td {
    border-bottom: 1px solid #000;
  }

  tr th:not(:first-child) {
    border-left-color: #fff;
  }

  tr td:last-child {
    border-right: 1px solid #000;
  }

  tr:nth-child(2) td {
    border-top-color: var(--color-primary);
  }

  tr:first-child th:first-child {
    border-top-left-radius: 10px;
  }

  tr:first-child th:last-child {
    border-top-right-radius: 10px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  td.right {
    text-align: center;
  }
`;

const HomePricingTable = () => {
    return (
        <Inner>
            <Text>Prediksi Biaya Kuliah di Masa Depan</Text>
            <TableWrapper>
                <StyledTable>
                    <tbody>
                    <tr>
                        <th></th>
                        <th>2018</th>
                        <th>2023</th>
                        <th>2028</th>
                    </tr>
                    <tr>
                        <td>ITB</td>
                        <td className="right">20.000.000</td>
                        <td className="right">46.000.000</td>
                        <td className="right">93.000.000</td>
                    </tr>
                    <tr>
                        <td>Kuliah di Australia</td>
                        <td className="right">417.105.000</td>
                        <td className="right">483.539.000</td>
                        <td className="right">560.554.000</td>
                    </tr>
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </Inner>
    );
};

export default HomePricingTable;
