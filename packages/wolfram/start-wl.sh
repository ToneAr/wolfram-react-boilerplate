#!/usr/bin/env bash

# 'wolframscript' is not available on all platforms.
# Use 'math' on linux.
case $OSTYPE in
  linux-gnu)
    math -script ./deploy.wls
    ;;
  *)
    wolframscript -script ./deploy.wls
    ;;
esac
