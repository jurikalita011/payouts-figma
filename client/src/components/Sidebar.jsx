import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import styles from "../styles/sidebar/Sidebar.module.css";

export const Sidebar = () => {
  const page = [
    { icon: "home.png", text: "Home" },
    { icon: "orders.png", text: "Orders" },
    { icon: "products.png", text: "Products" },
    { icon: "delivery.png", text: "Delivery" },
    { icon: "marketing.png", text: "Marketing" },
    { icon: "analytics.png", text: "Analytics" },
    { icon: "payouts.png", text: "Payouts" },
    { icon: "discounts.png", text: "Discounts" },
    { icon: "audience.png", text: "Audience" },
    { icon: "appearance.png", text: "Appearance" },
    { icon: "plugins.png", text: "Plugins" },
  ];
  return (
    <Box className={styles.cont}>
      <Box className={styles.topNav}>
        <Box className={styles.logoCont}>
          <Image className={styles.logo} src="logo.png" />
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
