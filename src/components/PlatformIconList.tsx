import {FaWindows, 
        FaPlaystation, 
        FaXbox, 
        FaLinux, 
        FaApple, 
        FaAndroid
}       from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import type { Platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import type { IconType } from 'react-icons';

interface Props {
        platforms : Platform[]
}

const PlatformIconList = ({platforms} : Props ) => 
{

        const iconMap: {[key : string] : IconType} = {
                pc: FaWindows,
                playstation: FaPlaystation,
                xbox: FaXbox,
                linux: FaLinux,
                mac: FaApple ,
                android: FaAndroid,
                ios: MdPhoneIphone,
                nintendo: SiNintendo,
                web: BsGlobe
        };

  return (
        <HStack spaceX={2} >
                {platforms.map(({ id, slug }) => 
                {
                const IconComponent = iconMap[slug];
                if (!IconComponent) return null; // skip if no icon exists
                return <Icon key={id} as={IconComponent} color='gray.500' />;
                })}
        </HStack>
)}

export default PlatformIconList
