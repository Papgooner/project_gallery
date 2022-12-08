import { Tabs } from "@geist-ui/core";
import { useTheme } from "@geist-ui/core";

function NavBar() {
    const { palette } = useTheme()
    return (
    <div>
        <Tabs initialValue="1" >
        <Tabs.Item label="Option One" value="1">Option One</Tabs.Item>
        <Tabs.Item label="Option Two" value="2">Option Two</Tabs.Item>
    </Tabs>
    </div>
    );
};

export default NavBar;