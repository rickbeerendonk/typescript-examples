#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
FILE=$1

color_off="\033[0m"
blue="\033[0;34m"
bold=$(tput bold)
normal=$(tput sgr0)

# Clear terminal
clear

# Search the TypeScript compiler (preferred: locally in node_modules/.bin, otherwise global)
if [[ -x "$SCRIPT_DIR/../node_modules/.bin/tsc" ]]; then
    TSC="$SCRIPT_DIR/../node_modules/.bin/tsc"
else
    TSC=$(command -v tsc)
fi

if [[ -z "$TSC" ]]; then
    echo "${blue}${bold}error:${normal}${color_off} TypeScript compiler (tsc) not found."
    exit 1
fi

# Function to comment out 'export {}' at the bottom of the TypeScript file
comment_export_line() {
    local temp_file="$1"
    sed 's/^export {};$/\/\/ export {}/' "$FILE" > "$temp_file"
}

if [[ $FILE == *.ts ]]; then
    # TypeScript
    echo "${blue}${bold}info:${normal}${color_off} TypeScript"
    
    # Show the compiler version
    "$TSC" -v
    echo

    # Create a temporary file
    TEMP_FILE=$(mktemp /tmp/temp_ts.XXXXXX.ts)

    # Comment out 'export {}' line in the temporary file
    comment_export_line "$TEMP_FILE"

    COMPILED_FILE=${TEMP_FILE%.ts}.js
    "$TSC" "$TEMP_FILE" --outFile "$COMPILED_FILE"
    if [[ $? -ne 0 ]]; then
        echo "${blue}${bold}error:${normal}${color_off} TypeScript compilation failed"
        rm "$TEMP_FILE"
        exit 1
    fi

    if [[ -f "$COMPILED_FILE" ]]; then
        clear
        node "$COMPILED_FILE"
        rm "$COMPILED_FILE"
    fi

    # Remove temporary file
    rm "$TEMP_FILE"
else
    echo "${blue}${bold}error:${normal}${color_off} Geen TypeScript-bestand"
fi
