import React from 'react';
import { Button, Icon } from '@mongodb-js/compass-components';
import { createButton } from './items-grid';

export type ItemType = 'database' | 'collection';

export function useCreateControls(
  isEditable: boolean,
  itemType: ItemType,
  onCreateClick?: () => void
): React.ReactElement | null {
  if (!isEditable || !onCreateClick) {
    return null;
  }

  return (
    <Button
      variant="primary"
      leftGlyph={<Icon role="presentation" glyph="Plus" />}
      onClick={() => {
        onCreateClick();
      }}
      className={createButton}
    >
      Create {itemType}
    </Button>
  );
}
