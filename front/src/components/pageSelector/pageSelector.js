import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalStateContext"
import { OtherPage, Selector, ThisPage } from "./style"

export default function PageSelector() {
    const { states, setters } = useContext(GlobalContext)
    function goToNextPage() {
        setters.setPage(states.page + 1)
        setters.setWatcher(states.watcher + 1)
    }
    function goToPreviousPage() {
        setters.setPage(states.page - 1)
        setters.setWatcher(states.watcher + 1)
    }
    function goToFirstPage() {
        setters.setPage(1)
        setters.setWatcher(states.watcher + 1)
    }
    function forwardTwoPages() {
        setters.setPage(states.page + 2)
        setters.setWatcher(states.watcher + 1)
    }
    function backwardTwoPages() {
        setters.setPage(states.page - 2)
        setters.setWatcher(states.watcher + 1)
    }
    function goToLastPage() {
        setters.setPage(5)
        setters.setWatcher(states.watcher + 1)
    }
    if (states.page === 1) {
        return (
            <Selector>
                <ThisPage>{states.page}</ThisPage>
                <OtherPage onClick={goToNextPage}>{states.page + 1}</OtherPage>
                <OtherPage onClick={forwardTwoPages}>{states.page + 2}</OtherPage>
                <OtherPage onClick={goToNextPage}>&#62;</OtherPage>
                <OtherPage onClick={goToLastPage} >Última</OtherPage>
            </Selector>
        )
    } else if (states.page === 2) {
        return (
            <Selector>
                <OtherPage onClick={goToPreviousPage}>&#60;</OtherPage>
                <OtherPage onClick={goToPreviousPage}> {states.page - 1}</OtherPage>
                <ThisPage>{states.page}</ThisPage>
                <OtherPage onClick={goToNextPage}>{states.page + 1}</OtherPage>
                <OtherPage onClick={goToNextPage}>&#62;</OtherPage>
                <OtherPage onClick={goToLastPage} >Última</OtherPage>
            </Selector>)
    }
    else if (states.page === 4) {
        return (
            <Selector>
                <OtherPage onClick={goToFirstPage} >Primeira</OtherPage>
                <OtherPage onClick={goToPreviousPage}>&#60;</OtherPage>
                <OtherPage onClick={goToPreviousPage}> {states.page - 1}</OtherPage>
                <ThisPage>{states.page}</ThisPage>
                <OtherPage onClick={goToNextPage}>{states.page + 1}</OtherPage>
                <OtherPage onClick={goToNextPage}>&#62;</OtherPage>
            </Selector>)
    } else if (states.page === 5) {
        return (
            <Selector>
                <OtherPage onClick={goToFirstPage} >Primeira</OtherPage>
                <OtherPage onClick={goToPreviousPage}>&#60;</OtherPage>
                <OtherPage onClick={backwardTwoPages}>{states.page - 2} </OtherPage>
                <OtherPage onClick={goToPreviousPage}> {states.page - 1}</OtherPage>
                <ThisPage>{states.page}</ThisPage>
            </Selector>
        )
    } else {
        return (
            <Selector>
                <OtherPage onClick={goToFirstPage} >Primeira</OtherPage>
                <OtherPage onClick={goToPreviousPage}>&#60;</OtherPage>
                <OtherPage onClick={goToPreviousPage}> {states.page - 1}</OtherPage>
                <ThisPage>{states.page}</ThisPage>
                <OtherPage onClick={goToNextPage}>{states.page + 1}</OtherPage>
                <OtherPage onClick={goToNextPage}>&#62;</OtherPage>
                <OtherPage onClick={goToLastPage} >Última</OtherPage>
            </Selector>
        )
    }
}