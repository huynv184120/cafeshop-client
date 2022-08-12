export const managePageAction = {
    activeTab: "activeTab",
}

export const activeTab = (data) => {
    return {
        type: managePageAction.activeTab,
        data,
    }

} 
