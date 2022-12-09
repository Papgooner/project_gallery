import { Tabs } from "@geist-ui/core";
import { useTheme, Text } from "@geist-ui/core";

function TabSelect() {
    const { palette } = useTheme()
    return (
    <div>
        <Tabs initialValue="1" >
        <Tabs.Item label="Police Api" value="1"><Text><u>Police Api Application.</u><br />
        This project was done as part of a coding scheme organised by work, with a financial incentive of £300 to complete a course and an assesment afterwards.<br />
        The final assesment task was to create a web application that would display data from a publicly available government API, and would update the presented information based on the user input. <br />
        The application presents the user with a host of dynamically generated buttons, each button leads to a dynamically created page. The whole idea behind all this "dynamic" content is to make the webside<br />
        self updating, so if the API backend is updated, for example a new police force was founded, a button leading to a website about that new police force would be automatically created. A more 'real world'<br />
        for this would be a shops website, where if the shops database is updated and a new product is added, the website woul automatically create a page for that product, the website owner wouldnt have to <br />
        manually make the page themselves.
        </Text></Tabs.Item>
        <Tabs.Item label="Project Runway" value="2"><u>Project Runway</u><br /> 
        This project was a practice task given to me, to demonstrate my knowledge </Tabs.Item>
    </Tabs>
    </div>
    );
};

export default TabSelect;