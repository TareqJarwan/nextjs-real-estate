import { useContext } from 'react';
import { Icon, Flex } from '@chakra-ui/react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginLeft='1'>
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize='2xl'
                cursor='pointer'
                d={['none', 'none', 'none', 'block']}
            />
        </Flex>
    );
}

export default RightArrow;