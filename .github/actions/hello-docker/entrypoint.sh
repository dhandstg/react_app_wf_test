#!/bin/sh -l

echo "::debug ::This is a debug message"
echo "::warning ::This is a warning message"
echo "::error ::This is an error message"

echo "::add-mask::$1"

time=$(date)
echo "::set-output name=time::$time"

echo "::group::Expandable logs with 8 lines"
for num in 1 2 3 4 5 6 7 8
do
    echo "Line $num from group"
done
echo "::endgroup::"

echo "HELLO=hello" >> $GITHUB_ENV