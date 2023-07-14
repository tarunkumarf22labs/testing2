import React from 'react'
import Sheet from 'react-modal-sheet';
import { IBottomSheet } from './type';
function BottomSheet({ children, isOpen, handleclose } : IBottomSheet ) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={handleclose}
      snapPoints={[1000, 900]}
      initialSnap={1}
      detent="content-height"
    >
      <Sheet.Container>
        <Sheet.Content>
          <Sheet.Header />
          <Sheet.Scroller>
            {children}
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={handleclose} />
    </Sheet>
  )
}

export default BottomSheet