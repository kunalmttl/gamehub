import { Badge, Stack, Text } from "@chakra-ui/react"

interface Props {
  score: number
}

const CriticScore = ({score} : Props) => {
  return (
        <Stack boxSize={"28px"}>

                <Badge
                colorPalette={score > 75 ? "green" : score > 60 ? "yellow" : "red"}
                color="white" 
                fontSize="12px"
                paddingX={2}
                borderRadius="4px"
                textAlign="center"
                >
                <Text> {score} </Text>
                </Badge>
        </Stack>
  )
}

export default CriticScore
