(function() {var implementors = {};
implementors["bincode"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bincode/internal/enum.ErrorKind.html\" title=\"enum bincode::internal::ErrorKind\">ErrorKind</a>",synthetic:false,types:["bincode::internal::ErrorKind"]},];
implementors["chrono"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"chrono/format/struct.ParseError.html\" title=\"struct chrono::format::ParseError\">ParseError</a>",synthetic:false,types:["chrono::format::ParseError"]},];
implementors["clap"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"clap/struct.Error.html\" title=\"struct clap::Error\">Error</a>",synthetic:false,types:["clap::errors::Error"]},];
implementors["crossbeam_queue"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_queue/struct.PopError.html\" title=\"struct crossbeam_queue::PopError\">PopError</a>",synthetic:false,types:["crossbeam_queue::err::PopError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_queue/struct.PushError.html\" title=\"struct crossbeam_queue::PushError\">PushError</a>&lt;T&gt;",synthetic:false,types:["crossbeam_queue::err::PushError"]},];
implementors["csv"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"csv/struct.DeserializeError.html\" title=\"struct csv::DeserializeError\">DeserializeError</a>",synthetic:false,types:["csv::deserializer::DeserializeError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"csv/struct.Error.html\" title=\"struct csv::Error\">Error</a>",synthetic:false,types:["csv::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"csv/struct.FromUtf8Error.html\" title=\"struct csv::FromUtf8Error\">FromUtf8Error</a>",synthetic:false,types:["csv::error::FromUtf8Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"csv/struct.Utf8Error.html\" title=\"struct csv::Utf8Error\">Utf8Error</a>",synthetic:false,types:["csv::error::Utf8Error"]},{text:"impl&lt;W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"csv/struct.IntoInnerError.html\" title=\"struct csv::IntoInnerError\">IntoInnerError</a>&lt;W&gt;",synthetic:false,types:["csv::error::IntoInnerError"]},];
implementors["error_chain"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"error_chain/example_generated/inner/struct.Error.html\" title=\"struct error_chain::example_generated::inner::Error\">Error</a>",synthetic:false,types:["error_chain::example_generated::inner::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"error_chain/example_generated/struct.Error.html\" title=\"struct error_chain::example_generated::Error\">Error</a>",synthetic:false,types:["error_chain::example_generated::Error"]},];
implementors["futures"] = [{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/future/struct.SharedError.html\" title=\"struct futures::future::SharedError\">SharedError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,&nbsp;</span>",synthetic:false,types:["futures::future::shared::SharedError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/stream/struct.ReuniteError.html\" title=\"struct futures::stream::ReuniteError\">ReuniteError</a>&lt;T&gt;",synthetic:false,types:["futures::stream::split::ReuniteError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/oneshot/struct.Canceled.html\" title=\"struct futures::sync::oneshot::Canceled\">Canceled</a>",synthetic:false,types:["futures::sync::oneshot::Canceled"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.SendError.html\" title=\"struct futures::sync::mpsc::SendError\">SendError</a>&lt;T&gt;",synthetic:false,types:["futures::sync::mpsc::SendError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.TrySendError.html\" title=\"struct futures::sync::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;",synthetic:false,types:["futures::sync::mpsc::TrySendError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/unsync/mpsc/struct.SendError.html\" title=\"struct futures::unsync::mpsc::SendError\">SendError</a>&lt;T&gt;",synthetic:false,types:["futures::unsync::mpsc::SendError"]},];
implementors["log"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>",synthetic:false,types:["log::SetLoggerError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.ShutdownLoggerError.html\" title=\"struct log::ShutdownLoggerError\">ShutdownLoggerError</a>",synthetic:false,types:["log::ShutdownLoggerError"]},];
implementors["rand"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.WeightedError.html\" title=\"enum rand::distributions::WeightedError\">WeightedError</a>",synthetic:false,types:["rand::distributions::weighted::WeightedError"]},];
implementors["rand_core"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>",synthetic:false,types:["rand_core::error::Error"]},];
implementors["rand_jitter"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rand_jitter/enum.TimerError.html\" title=\"enum rand_jitter::TimerError\">TimerError</a>",synthetic:false,types:["rand_jitter::error::TimerError"]},];
implementors["rayon"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rayon/enum.InitError.html\" title=\"enum rayon::InitError\">InitError</a>",synthetic:false,types:["rayon::api::InitError"]},];
implementors["regex"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"regex/enum.Error.html\" title=\"enum regex::Error\">Error</a>",synthetic:false,types:["regex::error::Error"]},];
implementors["regex_syntax"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"regex_syntax/struct.Error.html\" title=\"struct regex_syntax::Error\">Error</a>",synthetic:false,types:["regex_syntax::Error"]},];
implementors["serde"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>",synthetic:false,types:["serde::de::value::Error"]},];
implementors["syn"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/struct.Error.html\" title=\"struct syn::Error\">Error</a>",synthetic:false,types:["syn::error::Error"]},];
implementors["time"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"time/struct.OutOfRangeError.html\" title=\"struct time::OutOfRangeError\">OutOfRangeError</a>",synthetic:false,types:["time::duration::OutOfRangeError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"time/enum.ParseError.html\" title=\"enum time::ParseError\">ParseError</a>",synthetic:false,types:["time::ParseError"]},];
implementors["tokio"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/codec/length_delimited/struct.FrameTooBig.html\" title=\"struct tokio::codec::length_delimited::FrameTooBig\">FrameTooBig</a>",synthetic:false,types:["tokio::codec::length_delimited::FrameTooBig"]},];
implementors["tokio_current_thread"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.RunError.html\" title=\"struct tokio_current_thread::RunError\">RunError</a>",synthetic:false,types:["tokio_current_thread::RunError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.RunTimeoutError.html\" title=\"struct tokio_current_thread::RunTimeoutError\">RunTimeoutError</a>",synthetic:false,types:["tokio_current_thread::RunTimeoutError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.TurnError.html\" title=\"struct tokio_current_thread::TurnError\">TurnError</a>",synthetic:false,types:["tokio_current_thread::TurnError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.BlockError.html\" title=\"struct tokio_current_thread::BlockError\">BlockError</a>&lt;T&gt;",synthetic:false,types:["tokio_current_thread::BlockError"]},];
implementors["tokio_executor"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_executor/struct.EnterError.html\" title=\"struct tokio_executor::EnterError\">EnterError</a>",synthetic:false,types:["tokio_executor::enter::EnterError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_executor/struct.SpawnError.html\" title=\"struct tokio_executor::SpawnError\">SpawnError</a>",synthetic:false,types:["tokio_executor::error::SpawnError"]},];
implementors["tokio_reactor"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_reactor/struct.SetFallbackError.html\" title=\"struct tokio_reactor::SetFallbackError\">SetFallbackError</a>",synthetic:false,types:["tokio_reactor::SetFallbackError"]},];
implementors["tokio_sync"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.SendError.html\" title=\"struct tokio_sync::mpsc::error::SendError\">SendError</a>",synthetic:false,types:["tokio_sync::mpsc::bounded::SendError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.TrySendError.html\" title=\"struct tokio_sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::bounded::TrySendError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.RecvError.html\" title=\"struct tokio_sync::mpsc::error::RecvError\">RecvError</a>",synthetic:false,types:["tokio_sync::mpsc::bounded::RecvError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.UnboundedSendError.html\" title=\"struct tokio_sync::mpsc::error::UnboundedSendError\">UnboundedSendError</a>",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedSendError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.UnboundedTrySendError.html\" title=\"struct tokio_sync::mpsc::error::UnboundedTrySendError\">UnboundedTrySendError</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedTrySendError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.UnboundedRecvError.html\" title=\"struct tokio_sync::mpsc::error::UnboundedRecvError\">UnboundedRecvError</a>",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedRecvError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/oneshot/error/struct.RecvError.html\" title=\"struct tokio_sync::oneshot::error::RecvError\">RecvError</a>",synthetic:false,types:["tokio_sync::oneshot::error::RecvError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/oneshot/error/struct.TryRecvError.html\" title=\"struct tokio_sync::oneshot::error::TryRecvError\">TryRecvError</a>",synthetic:false,types:["tokio_sync::oneshot::error::TryRecvError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/semaphore/struct.AcquireError.html\" title=\"struct tokio_sync::semaphore::AcquireError\">AcquireError</a>",synthetic:false,types:["tokio_sync::semaphore::AcquireError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/semaphore/struct.TryAcquireError.html\" title=\"struct tokio_sync::semaphore::TryAcquireError\">TryAcquireError</a>",synthetic:false,types:["tokio_sync::semaphore::TryAcquireError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/watch/error/struct.RecvError.html\" title=\"struct tokio_sync::watch::error::RecvError\">RecvError</a>",synthetic:false,types:["tokio_sync::watch::error::RecvError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_sync/watch/error/struct.SendError.html\" title=\"struct tokio_sync::watch::error::SendError\">SendError</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::watch::error::SendError"]},];
implementors["tokio_threadpool"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_threadpool/park/struct.ParkError.html\" title=\"struct tokio_threadpool::park::ParkError\">ParkError</a>",synthetic:false,types:["tokio_threadpool::park::default_park::ParkError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.BlockingError.html\" title=\"struct tokio_threadpool::BlockingError\">BlockingError</a>",synthetic:false,types:["tokio_threadpool::blocking::BlockingError"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_timer/throttle/struct.ThrottleError.html\" title=\"struct tokio_timer::throttle::ThrottleError\">ThrottleError</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::throttle::ThrottleError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_timer/timeout/struct.Error.html\" title=\"struct tokio_timer::timeout::Error\">Error</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::timeout::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_timer/struct.Error.html\" title=\"struct tokio_timer::Error\">Error</a>",synthetic:false,types:["tokio_timer::error::Error"]},];
implementors["toml"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"toml/value/struct.DatetimeParseError.html\" title=\"struct toml::value::DatetimeParseError\">DatetimeParseError</a>",synthetic:false,types:["toml::datetime::DatetimeParseError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"toml/ser/enum.Error.html\" title=\"enum toml::ser::Error\">Error</a>",synthetic:false,types:["toml::ser::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"toml/de/struct.Error.html\" title=\"struct toml::de::Error\">Error</a>",synthetic:false,types:["toml::de::Error"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()