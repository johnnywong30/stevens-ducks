import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import Notion from "services/notion/";

import { Text } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import Players from './Players'


const Roster = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(Notion.getRoster())
    }, [])
    
    const { roster } = useSelector(({ roster }) => roster )
    // TODO: map the data out
    console.log(roster)
    // roster is the data, now map it so we can populate the table with the data
    // read this reference for how to do that: https://reactjs.org/docs/lists-and-keys.html
    const table = (
        <TableContainer>
            <Table variant='simple' colorScheme='red'>
                <TableCaption>Stevens Ultimate Roster</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Role</Th>
                        <Th>Year</Th>
                        <Th>Major</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {roster.map((person) => 
                        <Tr>
                            <Td>{person.personName}</Td>
                            <Td>{person.personRole}</Td>
                            <Td>{person.personYear}</Td>
                            <Td>{person.personMajor}</Td>
                        </Tr>
                    )} 
                </Tbody>
            </Table>
        </TableContainer>
    );
    return (
        <>
            <Text>Roster</Text>
            {table}
        </>
    )
}

export default Roster