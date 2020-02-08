# ParkBot

> ParkBot, a command line tool that intakes a JSON file of parking spot data, and outputs a list of parking spots that match the query.

## Table of Contents

1. [Requirements](#Requirements)
1. [Installation](#Installation)
1. [Commands](#Commands)
1. [Execution](#Execution)


## Requirements

- Node 6.13.0

## Installation

 A step by step series of steps can be located at [npm](https://nodejs.org/en/download/package-manager/)

## Commands

- ***locate:*** The command will return a list of spot names by location (state only).
     
- ***find_price_hourly_lte:*** This command will return a list of spot names where the hourly price is less than or equal to the query price.

- ***find_price_hourly_gt:*** This command will return a list of spot names where the price is greater than the query price. 

| Command                   | Argument  | Type      | Example                                                |
| ------------------------- |:--------- | :-------- | :----------------------------------------------------- |
| locate                    |  state    | `String`  | ./parkbot airgarage-data.json locate AZ                |
| find_price_hourly_lte     |  cents    | `Number`  | ./parkbot airgarage-data.json find_price_hourly_lte AZ |
| find_price_hourly_gt      |  cents    | `Number`  | ./parkbot airgarage-data.json find_price_hourly_gt AZ  |

## Execution
From within the root directory:

Parkbot is executable taking in three arguments with a single space seperating each value (JSON file, command, argument).

Format Template: "./parkbot [JSON file] [command] [argument]"
Format Example: "./parkbot airgarage-data.json locate AZ"

JSON File: ["airgarage-data.json"]