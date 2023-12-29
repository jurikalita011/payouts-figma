import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/table/Table.module.css";

export const Table1 = () => {
  const dataSet = [
    {
      Status: "Processing",
      "Transaction ID": 131634495747,
      "Order amount": "₹10,125.00",
      "Transaction fees": "₹1,125.00",
      Total: "₹9,312.00",
    },
    {
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Order amount": "₹10,125.00",
      "Transaction fees": "₹9,312.00",
      Total: "₹9,312.00",
    },
    {
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Order amount": "₹10,125.00",
      "Transaction fees": "₹1,125.00",
      Total: "₹9,312.00",
    },
    {
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Order amount": "₹10,125.00",
      "Transaction fees": "₹1,125.00",
      Total: "₹9,312.00",
    },
    {
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Order amount": "₹10,125.00",
      "Transaction fees": "₹1,125.00",
      Total: "₹9,312.00",
    },
    {
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Order amount": "₹10,125.00",
      "Transaction fees": "₹1,125.00",
      Total: "₹9,312.00",
    },
    {
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Order amount": "₹10,125.00",
      "Transaction fees": "₹1,125.00",
      Total: "₹9,312.00",
    },
  ];
  return (
    <TableContainer className={styles.tableCont}>
      <Table size="lg">
        <Thead className={styles.thead}>
          <Tr>
            <Th>
              <Text className={styles.headingText}></Text>
            </Th>
            <Th>
              <Text className={styles.headingText}>Status</Text>
            </Th>
            <Th isNumeric>
              <Text className={styles.headingText}>Transaction ID</Text>
            </Th>
            <Th>
              <Text className={styles.headingText}>Order amount</Text>
            </Th>
            <Th>
              <Text className={styles.headingText}>Transaction fees</Text>
            </Th>
            <Th>
              <Text className={styles.headingText}>Total</Text>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {dataSet.map((data, index) => (
            <Tr key={index} className={styles.tr}>
              <Td></Td>
              <Td>
                <Text className={styles.txt3}>{data["Status"]}</Text>
              </Td>
              <Td isNumeric>
                <Text className={styles.txt}>{data["Transaction ID"]}</Text>
              </Td>
              <Td>
                <Text className={styles.txt3}>{data["Order amount"]}</Text>
              </Td>
              <Td>
                <Text className={styles.txt3}>{data["Transaction fees"]}</Text>
              </Td>
              <Td>
                <Text className={styles.txt}>{data["Total"]}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
