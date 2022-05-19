import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, clear } from "redux/actions/counter";
import { Stack, HStack, Text, Center, Button } from "@chakra-ui/react";
import { BsPlus } from 'react-icons/bs'
import { GrFormSubtract } from 'react-icons/gr'
import { MdClear } from 'react-icons/md'

const Counter = () => {
    const INCREMENT_VALUE = 1
    const DECREMENT_VALUE = 1

    const dispatch = useDispatch()
    const { count } = useSelector(({ counter }) => counter)

    const handleIncrement = () => {
        dispatch(increment(INCREMENT_VALUE))
    }

    const handleDecrement = () => {
        dispatch(decrement(DECREMENT_VALUE))
    }

    const handleClear = () => {
        dispatch(clear())
    }

    return (
        <Center>
            <Stack>
                <Text fontSize={'3xl'}>Redux Counter Example</Text>
                <Text fontSize={'lg'}>{count}</Text>
                <HStack spacing={2}>
                    <Button leftIcon={<BsPlus />} onClick={handleIncrement} />
                    <Button leftIcon={<GrFormSubtract />} onClick={handleDecrement} />
                    <Button leftIcon={<MdClear />} onClick={handleClear} />
                </HStack>
            </Stack>
        </Center>
    )
}

export default Counter;