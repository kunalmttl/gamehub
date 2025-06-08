import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/console.webp"
import { ColorModeButton } from "../components/ui/color-mode"

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" alignItems="center" padding="10px" marginRight={5}>
        <Image src = {logo} alt="GameHub Logo" boxSize="40px" marginLeft={5}/>
        {/* <Spacer /> */}
        <ColorModeButton />
      </HStack>
    </div>
  )
}

export default NavBar
