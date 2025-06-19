import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/console.webp"
import { ColorModeButton } from "../components/ui/color-mode"
import SearchInput from "./SearchInput"

interface SearchInputProps {
  onSearch: (searchTerm: string) => void; 
}


const NavBar = ({onSearch} : SearchInputProps) => {
  return (
    <div>
      <HStack justifyContent="space-between" alignItems="center" padding="10px" marginRight={5}>
        <Image src = {logo} alt="GameHub Logo" boxSize="40px" marginLeft={5}/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeButton />
      </HStack>
    </div>
  )
}

export default NavBar
