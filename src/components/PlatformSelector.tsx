import usePlatforms, { type Platform } from '@/hooks/usePlatforms'
import { Button, Menu, Portal, Text } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
        onSelectPlatform: (platform: Platform) => void;
        selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform} : Props) => {

        const {Data, error} = usePlatforms();

        if (error) return <p style={{ color: 'red' }}>{error}</p>;
  return (
        <>
        <Menu.Root size={'sm'}>
                <Menu.Trigger asChild>
                        <Button variant="subtle" size="xs" marginX={75}>
                                <Text textStyle={'xs'}> {(selectedPlatform) ? selectedPlatform.name : "Platforms"}   </Text>
                                <BsChevronDown/>
                        </Button>
                </Menu.Trigger>
                <Portal>
                        <Menu.Positioner>
                                <Menu.Content>
                                        {Data.map(platform => (
                                                <Menu.Item onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.slug}>
                                                        <Text textStyle={'xs'}>{platform.name}</Text>
                                                </Menu.Item>
                                        ))}
                                </Menu.Content>
                        </Menu.Positioner>
                </Portal>
        </Menu.Root>
        </>
)
}

export default PlatformSelector
