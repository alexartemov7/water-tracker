
import { Button, ButtonText, Box } from "@gluestack-ui/themed"; 

export default function Controls({setVolume, volume}) {

    return(
    <Box
    flexDirection="row"
    mt="$8"
    flexWrap="wrap"
    justifyContent="center"
    m="$8">
        <Button m="$4" size="xl" rounded="$xl" >
            <ButtonText onPress={() => setVolume(volume + 250)}>Add 🥤</ButtonText>
        </Button>
        <Button m="$4" size="xl" rounded="$xl" >
            <ButtonText onPress={() => setVolume(volume + 750)}>Add 🫙</ButtonText>
        </Button>
        <Button m="$4" size="xl" rounded="$xl" action="negative">
            <ButtonText onPress={() => setVolume(0)}>Reset 🐡</ButtonText>
        </Button>
    </Box>

    )

}