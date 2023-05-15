import React from "react";
import { Page, Text, Image, Document, View, StyleSheet } from "@react-pdf/renderer";
import Logo from "../images/Sinag-Logo.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    color: 'black',
    fontFamily: 'Helvetica-Bold',
    marginTop: '12',
  },
  text: {
    margin: 5,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Helvetica",
    color: "black",
  },
  logo: {
    width: '52px',
    height: '52px',
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
    marginBottom: 5,
    textAlign: "center",
    color: "black",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: 'tomato',
    fontFamily: 'Helvetica-Bold',
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol0: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol1: {
    width: "15%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol2: {
    width: "60%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 10,
    textAlign: "left"
  },
  underline: {
    borderBottom: '2px solid black',
    width: '80%',
    marginHorizontal: 'auto',
    marginVertical: '4'
  },
  timestamp: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 30,
    textAlign: "right",
    color: "grey",
  },
  ulHeader: {
    margin: 5,
    marginTop: 20,
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "black",
  },
  ul: {
    flexDirection: "row",
    fontSize: 10,
  },
  li: {
    margin: 5,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Helvetica",
    color: "black",
    paddingRight: 35,
  },
  email: {
    margin: 5,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Helvetica",
    color: "blue",
  },
  name: {
    marginLeft: 5,
    fontSize: 24,
    textAlign: "justify",
    fontFamily: "Helvetica-Bold",
    color: "black",
  },

});

const PDFFile = (props) => {
  const data = props.data;
  const node = props.node;
  const generated = props.generated;

  const AnomalyType = (type) => {
    switch (type) {
      case 1:
        return 'LED is ON during daytime';
      case 2:
        return 'Auto switch mode not working';
      case 3:
        return 'Solar panel no output during daytime';
      case 4:
        return 'Battery is drained fast; empty battery at night-time';
      case 5:
        return 'LED is OFF during night-time';
      default:
        return;
    }
  }

  return (
    <Document>
      <Page size="LEGAL" style={styles.body}>
        {/* Header - Project Name and Logo */}
        <View style={styles.header}>
          <Image style={styles.logo} src={Logo} />
          <View>
            <Text style={styles.name}>Project Sinag</Text>
            <Text style={styles.email}>sinagproject2023@gmail.com</Text>
          </View>
        </View>

        <View style={styles.underline}>
        </View>

        <Text style={styles.title}>Anomaly Report of {node}</Text>


        {/* Content Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableCol0}>
              <Text style={[styles.tableCell, { textAlign: "center" }]}>Date</Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={[styles.tableCell, { textAlign: "center" }]}>Time</Text>
            </View>
            <View style={styles.tableCol2}>
              <Text style={[styles.tableCell, { textAlign: "center" }]}>Description</Text>
            </View>
          </View>


          {data.map((row, i) => (
            <View key={i} style={styles.tableRow}>
              <View style={styles.tableCol0}>
                <Text style={styles.tableCell}>{row.date}</Text>
              </View>
              <View style={styles.tableCol1}>
                <Text style={[styles.tableCell, { textAlign: "center" }]}>{row.time}</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>{AnomalyType(row.anomaly)}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Suggestion action section */}
        <View>
          <Text style={styles.ulHeader}>Suggested actions for the 'LED is ON during daytime':</Text>
          <View style={styles.ul}>
            <Text style={styles.text}>1.</Text>
            <Text style={styles.li}>Check solar panel connections: Ensure that the connections between the solar panel and the charge controller are secure and free from damage.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>2.</Text>
            <Text style={styles.li}>Inspect solar panel condition: Check the solar panel for any physical damage, such as cracks or broken cells, that could affect its performance. Replace the panel if necessary.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>3.</Text>
            <Text style={styles.li}>Verify solar panel positioning: Ensure that the solar panel is correctly positioned to receive direct sunlight. Remove any obstructions or shading that may be blocking sunlight.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>4.</Text>
            <Text style={styles.li}>Clean the solar panel: Check for dirt, dust, or debris on the solar panel surface. Clean it gently with a soft cloth or brush to maximize sunlight absorption.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>5.</Text>
            <Text style={styles.li}>Assess environmental factors: Consider external factors such as extreme weather conditions or environmental damage that could impact the solar panel's output. Address any issues accordingly.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>6.</Text>
            <Text style={styles.li}>Evaluate battery health: Assess the condition and capacity of the battery. If the battery is unable to hold a charge properly, it may be causing the LED to turn on during the day.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>7.</Text>
            <Text style={styles.li}>Check charge controller settings: Review the settings of the charge controller. Ensure that it is configured correctly for the system's operation.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>8.</Text>
            <Text style={styles.li}>Utilize the remote control: If available, use the remote control to manually turn off the LED during daytime or switch it to the appropriate mode.</Text>
          </View>


          <Text style={styles.ulHeader}>Suggested actions for the 'Auto switch mode not working':</Text>
          <View style={styles.ul}>
            <Text style={styles.text}>1.</Text>
            <Text style={styles.li}>Check power supply: Verify that the solar panel is receiving adequate sunlight for charging.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>2.</Text>
            <Text style={styles.li}>Inspect connections: Ensure secure connections between the solar panel, battery, and auto switch module.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>3.</Text>
            <Text style={styles.li}>Verify auto switch module functionality: Check if the auto switch module is operational and responding correctly to light conditions.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>4.</Text>
            <Text style={styles.li}>Assess battery health: Evaluate the condition and capacity of the battery. A weak or faulty battery can affect the proper functioning of the auto switch mode.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>5.</Text>
            <Text style={styles.li}>Check timer settings: Verify that the timer settings are accurate and aligned with the desired switching intervals. Incorrect timer settings can prevent the auto switch mode from working as intended.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>6.</Text>
            <Text style={styles.li}>Perform system reset: Reset the solar street light system to address any software or programming issues that may be affecting the auto switch mode.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>7.</Text>
            <Text style={styles.li}>Regular maintenance: Clean the solar panel and inspect for any physical damage or debris that could be obstructing sunlight detection or affecting the auto switch module.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>8.</Text>
            <Text style={styles.li}>Consider professional inspection: If the issue persists or if you suspect a hardware fault, it is advisable to engage technicians or contact the manufacturer for further assistance.</Text>
          </View>

          <Text style={styles.ulHeader}>Suggested actions for the 'Solar panel no output during daytime':</Text>
          <View style={styles.ul}>
            <Text style={styles.text}>1.</Text>
            <Text style={styles.li}>Check panel positioning: Verify that the solar panel is correctly positioned to receive direct sunlight. Ensure there are no obstructions or shading that could be blocking sunlight.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>2.</Text>
            <Text style={styles.li}>Inspect panel connections: Ensure that the connections between the solar panel and the rest of the system are secure and free from damage.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>3.</Text>
            <Text style={styles.li}>Clean the panel: Check for dirt, dust, or debris on the solar panel surface. Clean it gently with a soft cloth or brush to maximize sunlight absorption.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>4.</Text>
            <Text style={styles.li}>Assess panel integrity: Inspect the solar panel for any physical damage or cracks that could affect its performance. Replace the panel if necessary.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>5.</Text>
            <Text style={styles.li}>Verify panel functionality: Test the solar panel's functionality using appropriate equipment to check for any internal faults or malfunctions.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>6.</Text>
            <Text style={styles.li}>Evaluate wiring and connections: Check the wiring and connections between the solar panel and other components, such as the battery and charge controller. Look for any loose or damaged connections.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>7.</Text>
            <Text style={styles.li}>Assess environmental factors: Consider external factors such as extreme weather conditions or environmental damage that could impact the solar panel's output.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>8.</Text>
            <Text style={styles.li}>Seek professional assistance: If the issue persists or if there are complex technical problems, consult a professional technician or contact the manufacturer for further guidance.</Text>
          </View>

          <Text style={styles.ulHeader}>Suggested actions for the 'Battery is drained fast; empty battery at night-time':</Text>
          <View style={styles.ul}>
            <Text style={styles.text}>1.</Text>
            <Text style={styles.li}>Check power supply: Ensure that the solar panel is receiving sufficient sunlight during the day to charge the battery effectively.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>2.</Text>
            <Text style={styles.li}>Assess battery health: Evaluate the condition and capacity of the battery. It may be deteriorating or unable to hold a charge. Consider replacing the battery if it is old or damaged.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>3.</Text>
            <Text style={styles.li}>Verify power consumption: Examine the power consumption of the LED lights and other components to identify any excessive or abnormal energy usage. Replace any inefficient components if necessary.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>4.</Text>
            <Text style={styles.li}>Inspect connections: Ensure that the connections between the solar panel, battery, and other components are secure and functioning properly to prevent energy loss. Fix any loose or faulty connections.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>5.</Text>
            <Text style={styles.li}>Evaluate lighting schedule: Review the timing and duration of the LED lights. Adjust the schedule if it is unnecessarily long or if the lights are operating when not required. Optimize the lighting schedule for energy efficiency.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>6.</Text>
            <Text style={styles.li}>Check for external factors: Look for any factors that may be draining the battery, such as parasitic loads or unauthorized power usage. Address any unauthorized power consumption or remove any unnecessary loads.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>7.</Text>
            <Text style={styles.li}>Conduct a system reset: Reset the solar street light system to address any software or programming issues that could contribute to excessive battery drainage. This can help resolve any anomalies or errors.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>8.</Text>
            <Text style={styles.li}>Consider battery replacement: If the battery is old, damaged, or no longer performing optimally, replacing it with a new and reliable battery may be necessary to ensure proper functioning of the solar street light.</Text>
          </View>

          <Text style={styles.ulHeader}>Suggested actions for the 'LED is OFF during nighttime':</Text>
          <View style={styles.ul}>
            <Text style={styles.text}>1.</Text>
            <Text style={styles.li}>Check power supply: Ensure that the solar panel is receiving adequate sunlight during the day to charge the battery. If the battery is not being charged properly, it may result in insufficient power supply during the night.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>2.</Text>
            <Text style={styles.li}>Inspect connections: Verify the integrity of the connections between the solar panel, battery, and LED lights. Loose or faulty connections can disrupt the flow of power and cause the LED to remain off.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>3.</Text>
            <Text style={styles.li}>Assess battery health: Evaluate the condition of the battery. Over time, batteries can deteriorate and lose their capacity to hold a charge. If the battery is faulty or nearing the end of its lifespan, it may not provide enough power to illuminate the LED at night.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>4.</Text>
            <Text style={styles.li}>Check remote control settings: Ensure that the remote control is set to the desired mode, such as "Auto" mode for automatic operation during night-time.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>5.</Text>
            <Text style={styles.li}>Adjust timer settings: If your remote control has timer settings (e.g., 3 hours, 5 hours, 8 hours), ensure that the timer is set appropriately to match the required lighting duration during night-time.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>6.</Text>
            <Text style={styles.li}>Replace batteries: If the remote control operates on batteries, check and replace them if necessary to ensure proper functioning.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>7.</Text>
            <Text style={styles.li}>Perform regular maintenance: Clean the solar panels, inspect and clean the LED lights, and check for any physical damage or debris that may be obstructing the system.</Text>
          </View>
          <View style={styles.ul}>
            <Text style={styles.text}>8.</Text>
            <Text style={styles.li}>Consider professional inspection: If the issue persists or if you are unable to resolve the problem, contact a professional technician or the manufacturer's support team for further assistance.</Text>
          </View>
        </View>

        {/* Page Number on footer */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />

        {/* Timestamp of document generated */}
        <Text style={styles.timestamp} fixed>{generated}</Text>

      </Page>
    </Document>
  );
};

export default PDFFile;