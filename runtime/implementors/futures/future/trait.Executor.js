(function() {var implementors = {};
implementors["futures_cpupool"] = [{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;F&gt; for <a class=\"struct\" href=\"futures_cpupool/struct.CpuPool.html\" title=\"struct futures_cpupool::CpuPool\">CpuPool</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["futures_cpupool::CpuPool"]},];
implementors["tokio_core"] = [{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;F&gt; for <a class=\"struct\" href=\"tokio_core/reactor/struct.Core.html\" title=\"struct tokio_core::reactor::Core\">Core</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static,&nbsp;</span>",synthetic:false,types:["tokio_core::reactor::Core"]},{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;F&gt; for <a class=\"struct\" href=\"tokio_core/reactor/struct.Remote.html\" title=\"struct tokio_core::reactor::Remote\">Remote</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_core::reactor::Remote"]},{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;F&gt; for <a class=\"struct\" href=\"tokio_core/reactor/struct.Handle.html\" title=\"struct tokio_core::reactor::Handle\">Handle</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static,&nbsp;</span>",synthetic:false,types:["tokio_core::reactor::Handle"]},];
implementors["tokio_current_thread"] = [{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;F&gt; for <a class=\"struct\" href=\"tokio_current_thread/struct.TaskExecutor.html\" title=\"struct tokio_current_thread::TaskExecutor\">TaskExecutor</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static,&nbsp;</span>",synthetic:false,types:["tokio_current_thread::TaskExecutor"]},];
implementors["tokio_executor"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio_executor/struct.DefaultExecutor.html\" title=\"struct tokio_executor::DefaultExecutor\">DefaultExecutor</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_executor::global::DefaultExecutor"]},];
implementors["tokio_threadpool"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio_threadpool/struct.Sender.html\" title=\"struct tokio_threadpool::Sender\">Sender</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_threadpool::sender::Sender"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
