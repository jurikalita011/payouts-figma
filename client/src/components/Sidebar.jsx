import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import styles from "../styles/sidebar/Sidebar.module.css";

export const Sidebar = () => {
  const page = [
    { icon: "home.svg", text: "Home" },
    { icon: "orders.svg", text: "Orders" },
    { icon: "products.svg", text: "Products" },
    { icon: "delivery.svg", text: "Delivery" },
    { icon: "marketing.svg", text: "Marketing" },
    { icon: "analytics.svg", text: "Analytics" },
    { icon: "payouts.svg", text: "Payouts" },
    { icon: "discounts.svg", text: "Discounts" },
    { icon: "audience.svg", text: "Audience" },
    { icon: "appearance.svg", text: "Appearance" },
    { icon: "plugins.svg", text: "Plugins" },
  ];
  return (
    <Box className={styles.cont}>
      <Box className={styles.topNav}>
        <Box className={styles.logoCont}>
          <Image className={styles.logo} src="logo.svg" />
          <Box className={styles.txtCont}>
            <Text className={styles.logoTxt1}>Nishyan</Text>
            <Text className={styles.logoTxt2}>Visit store</Text>
          </Box>
          <Image className={styles.logoIcon} src="chevronDownIcon.png" />
        </Box>
        <Box className={styles.pagesCont}>
          {page.map((el, index) => (
            <Box className={styles.pages} key={index}>
              <Image className={styles.pagesIcon} src={el.icon} />
              <Text className={styles.pagesTxt}>{el.text}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={styles.bottomNav}>
        <Box className={styles.bottomNavCont}>
          <Box className={styles.bottomIconCont}>
            <Image className={styles.bottomIcon} src="wallet.png" />
          </Box>
          <Box className={styles.bottomNavTxtCont}>
            <Text className={styles.bottomNavTxt1}>Available credits</Text>
            <Text className={styles.bottomNavTxt2}>222.10</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
