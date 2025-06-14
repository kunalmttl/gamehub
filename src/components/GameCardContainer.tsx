import { Box } from '@chakra-ui/react'

interface GameCardContainerProps {
        children?: React.ReactNode;
}

const GameCardContainer = ({children} : GameCardContainerProps) => {
  return (
    <Box overflow = "hidden" borderRadius="md" boxShadow="md" colorPalette = "purple">
        {children}
    </Box>
  )
}

export default GameCardContainer
