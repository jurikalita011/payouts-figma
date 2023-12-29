import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/Payouts.module.css";
import { Sidebar } from "../components/Sidebar";
import { Table1 } from "../components/Table1";
import { Table2 } from "../components/Table2";
export const Payouts = () => {
  const [isActive, setActive] = useState(true);

  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <Box className={styles.cont}>
      <Box display={"flex"}>
        <Sidebar />
        <Box className={styles.right}>
          <Box className={styles.topRightCont}>
            <Box className={styles.topQcont}>
              <Box className={styles.qCont}>
                <Image className={styles.topQIcon} src="Help.png" />
                <Text className={styles.topQText}>How it works</Text>
              </Box>
            </Box>
            <Box className={styles.topSearchCont}>
              <Button className={styles.searchBtn}>
                {" "}
                <Image className={styles.searchIcon} src="search.png" />
              </Button>
              <Input
                variant={"unstyled"}
                className={styles.searchInp}
                value={"Search features, tutorials, etc."}
              />
            </Box>
            <Box className={styles.topMenuCont}>
              <Box className={styles.menuCont}>
                <Image className={styles.menuIcon} src="Menu.png" />
                <Image className={styles.menuIcon} src="polygon.png" />
              </Box>
            </Box>
          </Box>
          <Box className={styles.bottomRightCont}>
            <Box className={styles.overView}>
              <Text className={styles.overViewTxt}>Overview</Text>
              <Box className={styles.monthCont}>
                <Text className={styles.monthTxt}>This Month</Text>
                <Image className={styles.chevronDownIcon} src="month.png" />
              </Box>
            </Box>
            <Box className={styles.totals}>
              <Box className={styles.total11}>
                <Box className={styles.total1}>
                  <Box className={styles.net}>
                    <Box className={styles.nextPay}>
                      <Text className={styles.nextPayTxt}>Next Payout</Text>
                      <Image className={styles.nextIcon} src="helpWh.png" />
                    </Box>
                    <Box className={styles.price}>
                      <Text className={styles.cost}>₹2,312.23</Text>
                      <Box className={styles.ordersCont}>
                        <Text className={styles.orders}>23 orders</Text>
                        <Box className={styles.rightArrClCont}>
                          <Image
                            className={styles.rightArrowIcon}
                            src="rightArrWh.png"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.total1BottomCont}>
                  <Text className={styles.total1BottomTxt1}>
                    Next payout date:
                  </Text>
                  <Text className={styles.total1BottomTxt2}>
                    Today, 04:00PM
                  </Text>
                </Box>
              </Box>
              <Box className={styles.total2}>
                <Box className={styles.total2Cont}>
                  <Box className={styles.pendingCont}>
                    <Text className={styles.pendingTxt}>Amount Pending</Text>
                    <Image className={styles.pendingIcon2} src="Help.png" />
                  </Box>
                  <Box className={styles.pendingOrdersCont}>
                    <Text className={styles.pendingPrice}>₹92,312.20</Text>
                    <Box className={styles.pendingOrdersBox}>
                      <Text className={styles.pendingOrders}>13 orders</Text>
                      <Box className={styles.rightArrClCont}>
                        <Image
                          className={styles.rightArrowIcon}
                          src="rightArrBlue.png"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.total3}>
                <Box className={styles.total2Cont}>
                  <Box className={styles.pendingCont}>
                    <Text className={styles.pendingTxt}>Amount Processed</Text>
                    <Image className={styles.pendingIcon2} src="Help.png" />
                  </Box>
                  <Box className={styles.pendingOrdersCont}>
                    <Text className={styles.pendingPrice}>₹23,92,312.19</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.transactionMain}>
              <Box className={styles.transactionCont}>
                <Text className={styles.transactionTxt}>
                  Transactions | This Month
                </Text>
                <Box className={styles.payoutsRefundCont}>
                  <Box
                    className={
                      isActive ? styles.activeCont : styles.inactiveCont
                    }
                    onClick={handleClick}
                  >
                    <Text
                      className={
                        isActive ? styles.activeTxt : styles.inactiveTxt
                      }
                    >
                      Payouts (22)
                    </Text>
                  </Box>
                  <Box
                    className={
                      !isActive ? styles.activeCont : styles.inactiveCont
                    }
                    onClick={handleClick}
                  >
                    <Text
                      className={
                        !isActive ? styles.activeTxt : styles.inactiveTxt
                      }
                    >
                      Refunds (6)
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box className={styles.allTransactionCont}>
                <Box className={styles.bottomBar}>
                  <Box className={styles.bottomInpCont}>
                    <Image
                      className={styles.bottomInpIcon}
                      src="searchBtm.png"
                    />
                    <Input variant={"unstyled"} className={styles.bottomInp} />
                  </Box>
                  <Box className={styles.sortDownloadCont}>
                    <Box className={styles.sortCont}>
                      <Text className={styles.sortTxt}>Sort</Text>
                      <Image className={styles.sortIcon} src="sort.png" />
                    </Box>
                    <Box className={styles.downloadCont}>
                      <Image
                        className={styles.downloadIcon}
                        src="download.png"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  overflowY="auto"
                  maxHeight="375px"
                  width={"100%"}
                  marginTop="10px"
                >
                  {isActive ? <Table1 /> : <Table2 />}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
