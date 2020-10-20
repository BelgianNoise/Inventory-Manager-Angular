
export interface InventoryState {
    items: string;
}

export const initialInventoryState: InventoryState = {
    items: null,
};

export function getInitalState(): InventoryState {
    return initialInventoryState;
}
