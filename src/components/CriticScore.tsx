import { Badge, Stack } from "@chakra-ui/react"

interface Props {
  score: number
}

const CriticScore = ({score} : Props) => {
  return (
        <Stack boxSize={"28px"}>

                <Badge
                colorPalette={score > 75 ? "green" : score > 60 ? "yellow" : "red"}
                fontSize="12px"
                paddingX={2}
                borderRadius="4px"
                textAlign="center"
                >
                {score}
                </Badge>
        </Stack>
  )
}

export default CriticScore
