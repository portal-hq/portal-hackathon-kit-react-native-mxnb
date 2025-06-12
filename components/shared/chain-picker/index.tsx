import React, { Dispatch, FC, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from '../../../style/stylesheet';
import {
  ARBITRUM_MAINNET_CHAIN_ID,
  ARBITRUM_SEPOLIA_CHAIN_ID,
} from '../../../config';

interface ChainPickerComponentProps {
  chain: string;
  setChain: Dispatch<SetStateAction<string>>;
}

const ChainPickerComponent: FC<ChainPickerComponentProps> = ({
  chain,
  setChain,
}) => {
  return (
    <View style={[styles.formGroup, { marginBottom: 10 }]}>
      <Text style={styles.formLabel}>Chain</Text>
      <View style={styles.toggle}>
        {[
          { chainId: ARBITRUM_SEPOLIA_CHAIN_ID, name: 'Arbitrum Sepolia' },
          { chainId: ARBITRUM_MAINNET_CHAIN_ID, name: 'Arbitrum Mainnet' },
        ].map((value, index) => (
          <Pressable
            key={value.chainId}
            onPress={() => setChain(value.chainId)}
            style={[
              styles.toggleItem,
              index === 0 ? styles.toggleItemFirst : styles.toggleItemLast,
              chain === value.chainId ? styles.toggleItemActive : {},
            ]}
          >
            <Text
              style={[
                styles.toggleItemText,
                chain === value.chainId ? styles.toggleItemTextActive : {},
              ]}
            >
              {value.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ChainPickerComponent;
