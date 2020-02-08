# ParkBot

> ParkBot, a command line tool that intakes a JSON file of parking spot data, and outputs a list of parking spots that match the query.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

### Instal Instructions

A step by step series of examples that tell you how to get a development env running

From within the root directory:

Install node packages
```sh
npm install
```

## How to run solution file
From within the root directory:

Parkbot is executable taking in three arguments with a single space seperating each value (JSON file, command, argument).

Format Template: "./parkbot [JSON file] [command] [argument]"
Format Example: "./parkbot airgarage-data.json locate AZ"

JSON File: ["airgarage-data.json"]

Command & Argument Details: 

**locate:** The command will return a list of spot names by location (state only).
     
**find_price_hourly_lte:** This command will return a list of spot names where the hourly price is less than or equal to the query price.

**find_price_hourly_gt:** This command will return a list of spot names where the price is greater than the query price. 

| Command                   | Argument      |                 Example                                 |
| ------------------------- |:------------- | :------------------------------------------------------ |
| locate                    | String, state | ./parkbot airgarage-data.json locate AZ                 |
| find_price_hourly_lte     | Number, cents | ./parkbot airgarage-data.json find_price_hourly_lte AZ  |
| find_price_hourly_gt      | Number, cents | ./parkbot airgarage-data.json find_price_hourly_gt AZ   |


