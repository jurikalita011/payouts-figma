import React from "react";
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
import styles from "../styles/table/Table.module.css";

export const Table2 = () => {
  const pendingData = [
    {
      "Order ID": "#281209",
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Refund date": "Today, 08:45 PM",
      "Order amount": "₹1,125.00",
    },
    {
      "Order ID": "#281208",
      Status: "Processing",
      "Transaction ID": 131634495747,
      "Refund date": "Yesterday, 3:00 PM",
      "Order amount": "₹1,125.00",
    },
    {
      "Order ID": "#281207",
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Refund date": "12 Jul 2023, 03:00 PM",
      "Order amount": "₹1,125.00",
    },
    {
      "Order ID": "#281206",
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Refund date": "12 Jul 2023, 03:00 PM",
      "Order amount": "₹1,125.00",
    },
    {
      "Order ID": "#281205",
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Refund date": "12 Jul 2023, 03:00 PM",
      "Order amount": "₹1,125.00",
    },
    {
      "Order ID": "#281204",
      Status: "Successful",
      "Transaction ID": 131634495747,
      "Refund date": "12 Jul 2023, 03:00 PM",
      "Order amount": "₹1,125.00",
    },
  ];

  return (
    <TableContainer className={styles.tableCont}>
      <Table>
        <Thead className={styles.thead}>
          <Tr>
            <Th>
              <Text className={styles.headingText}>Order ID</Text>
            </Th>
            <Th>
              <Text className={styles.headingText}>Status</Text>
            </Th>
            <Th isNumeric>
              <Text className={styles.headingText}>Transaction ID</Text>
            </Th>
            <Th>
              <Text className={styles.headingText}>Refund date</Text>
            </Th>
            <Th>
              <Text className={styles.headingText}>Order amount</Text>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {pendingData.map((data, index) => (
            <Tr key={index} height={5}>
              <Td>
                <Text className={styles.txt2}>{data["Order ID"]}</Text>
              </Td>
              <Td>
                <Text className={styles.txt3}>{data["Status"]}</Text>
              </Td>
              <Td isNumeric>
                <Text className={styles.txt}>{data["Transaction ID"]}</Text>
              </Td>
              <Td>
                <Text className={styles.txt}>{data["Refund date"]}</Text>
              </Td>
              <Td>
                <Text className={styles.txt3}>{data["Order amount"]}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
