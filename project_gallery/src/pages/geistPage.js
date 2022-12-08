import { Text, Button, Page } from "@geist-ui/core"
import { useTheme } from "@geist-ui/core";

function GeistPage() {
    const { palette } = useTheme()
    return (
        <Page>
            <Text>Geist Page</Text>
            <Button style={{ backgroundColor: palette.successLight }}>Submit</Button>
        </Page>
    )
}

export default GeistPage;